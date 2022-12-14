import * as React from "react";
import { gsap, Power3 } from "gsap";
import styles from "../styles/Contact.module.scss";
import Button from "../components/button";
import Link from "next/link";
import { Arrow } from "../assets/Arrow";
import { TextInput, Textarea, Overlay, Modal } from "@mantine/core";
import { GoogleSpreadsheet } from "google-spreadsheet";
import * as EmailValidator from "email-validator";
import Head from "next/head";
import { usePrefersColorScheme } from "../hooks/usePrefersColorScheme";
import { useRouter } from "next/router";
import Loader from "../components/loader";
import axios from "axios";

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
  const router = useRouter();

  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID ?? "";
  const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID ?? "";
  const CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL ?? "";
  let PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY ?? "";
  PRIVATE_KEY = PRIVATE_KEY.replace(/\n/g, "\n");

  React.useEffect(() => {
    gsap.to(leftSection.current, {
      duration: 0.8,
      opacity: 1,
      delay: 1,
      y: 0,
      ease: Power3.easeOut,
    });

    gsap.to(rightSection.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      delay: 1.5,
      ease: Power3.easeOut,
    });

    gsap.to(footer.current, {
      duration: 1,
      opacity: 1,
      delay: 2,
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
    axios
      .post("/api/submit", {
        name: name,
        email: email,
        bio: bio,
      })
      .then((response) => {
        if (response.status === 200) {
          router.push("/confirm");
          setSubmitted(true);
          setIsSubmitting(false);
        }
      })
      .catch((error) => {
        setError(true);
        setSubmitted(true);
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <Head>
        <title>Contact | v26 Design Co.</title>
        <meta name="description" content="Web design company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {isSubmitting && (
          <>
            <Overlay
              opacity={1}
              color={`var(--main-bg-color-${preferredColorScheme})`}
              zIndex={5}
            />
            <Loader position="absolute" />
          </>
        )}
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
            {/* <div className={styles.backContainer}>
              <Link href="/" className={styles.back}>
                <div className={styles.arrow}>
                  <Arrow color={`var(--color-${preferredColorScheme})`} />
                </div>
                <p>Back</p>
              </Link>
            </div> */}
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

      {/* <footer className={styles.footer} ref={footer}>
        <p className={styles.copyright}>
          &copy; 2022 v26 Design Co. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
}
