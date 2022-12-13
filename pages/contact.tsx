import * as React from "react";
import { gsap, Power3 } from "gsap";
import styles from "../styles/Contact.module.scss";
import Button from "../components/button";
import Link from "next/link";
import { Arrow } from "../assets/Arrow";
import { TextInput, Textarea, LoadingOverlay, Modal } from "@mantine/core";
import { GoogleSpreadsheet } from "google-spreadsheet";
import * as EmailValidator from "email-validator";
import Head from "next/head";
import { usePrefersColorScheme } from "../hooks/usePrefersColorScheme";

export default function Contact() {
  const leftSection = React.useRef(null);
  const rightSection = React.useRef(null);
  const footer = React.useRef(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [showEmailWarning, setShowEmailWarning] = React.useState(false);
  const [error, setError] = React.useState(false);

  const preferredColorScheme = usePrefersColorScheme();

  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID ?? "";
  const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID ?? "";
  const CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL ?? "";
  let PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY ?? "";
  PRIVATE_KEY = PRIVATE_KEY.replace(/\n/g, "\n");

  React.useEffect(() => {
    gsap.to(leftSection.current, {
      duration: 1.8,
      opacity: 1,
      delay: 1,
      y: 0,
      ease: Power3.easeOut,
    });

    gsap.to(rightSection.current, {
      duration: 2,
      opacity: 1,
      y: 0,
      delay: 2,
      ease: Power3.easeOut,
    });

    gsap.to(footer.current, {
      duration: 3,
      opacity: 1,
      delay: 3,
      ease: Power3.easeOut,
    });
  }, []);

  const enteredText = name !== "" && email !== "" && bio !== "";

  const handleOnEmailEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!EmailValidator.validate(e.target.value)) {
      setShowEmailWarning(true);
      setEmail("");
    } else {
      setShowEmailWarning(false);
      setEmail(e.target.value);
    }
  };

  const handleSubmit = () => {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row: any) => {
      setIsSubmitting(true);

      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        const _result = await sheet.addRow(row);
        window.location.href = "/confirm";
        setSubmitted(true);
      } catch (e) {
        console.error("Error: ", e);
        setError(true);
      } finally {
        setIsSubmitting(false);
      }
    };

    const newRow = { Name: name, Email: email, Bio: bio };

    appendSpreadsheet(newRow);
  };

  return (
    <div>
      <Head>
        <title>Contact | v26 Design Co.</title>
        <meta name="description" content="Web design company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <LoadingOverlay
          visible={isSubmitting}
          loaderProps={{ color: `var(--color-${preferredColorScheme})` }}
        />
        <Modal
          opened={error}
          onClose={() => setError(false)}
          centered
          styles={{
            modal: {
              backgroundColor: `var(--input-bg-${preferredColorScheme})`,
              color: `var(--color-${preferredColorScheme})`,
              height: "160px",
            },
          }}
        >
          <div>
            <p className={styles.errorBody}>
              Something went wrong. Please try again. If this persists, contact
              <span className={styles.email}> kwami.nuh@gmail.com.</span>
            </p>
          </div>
        </Modal>
        <div className={styles.left} ref={leftSection}>
          <div className={styles.leftContent}>
            <div className={styles.backContainer}>
              <Link href="/" className={styles.back}>
                <div className={styles.arrow}>
                  <Arrow color={`var(--color-${preferredColorScheme})`} />
                </div>
                <p>Back</p>
              </Link>
            </div>
            <div className={styles.message}>
              looking forward to working with you
            </div>
          </div>
        </div>
        <div className={styles.right} ref={rightSection}>
          <div className={styles.contentBody}>
            <div className={styles.textfield}>
              <TextInput
                placeholder="Your name"
                label="Name"
                styles={{
                  label: { color: `var(--color-${preferredColorScheme})` },
                  input: {
                    backgroundColor: `var(--input-bg-${preferredColorScheme})`,
                    color: `var(--color-${preferredColorScheme})`,
                  },
                }}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.textfield}>
              <TextInput
                placeholder="you@email.com"
                label="Email"
                styles={{
                  label: { color: `var(--color-${preferredColorScheme})` },
                  input: {
                    backgroundColor: `var(--input-bg-${preferredColorScheme})`,
                    color: `var(--color-${preferredColorScheme})`,
                  },
                }}
                onChange={handleOnEmailEntered}
                error={showEmailWarning && "Please enter a valid email address"}
              />
            </div>
            <div className={styles.textArea}>
              <Textarea
                label="A brief summary of who you are"
                placeholder="Start typing.."
                autosize
                minRows={12}
                styles={{
                  label: { color: `var(--color-${preferredColorScheme})` },
                  input: {
                    backgroundColor: `var(--input-bg-${preferredColorScheme})`,
                    color: `var(--color-${preferredColorScheme})`,
                  },
                }}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            {enteredText && (
              <div className={styles.submitButton}>
                <Button
                  title="Submit"
                  onClick={handleSubmit}
                  disabled={submitted}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className={styles.footer} ref={footer}>
        <p className={styles.copyright}>
          &copy; 2022 v26 Design Co. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
