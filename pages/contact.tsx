import * as React from "react";
import { gsap, Power3 } from "gsap";
import styles from "../styles/Contact.module.scss";
import Button from "../components/button";
import Link from "next/link";
import { Arrow } from "../assets/Arrow";
import { TextInput, Textarea, Overlay, Modal } from "@mantine/core";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { IconArrowDownLeft } from "@tabler/icons";
import * as EmailValidator from "email-validator";
import Head from "next/head";
import { usePrefersColorScheme } from "../hooks/usePrefersColorScheme";
import { useRouter } from "next/router";
import Loader from "../components/loader";
import axios from "axios";
import Page from "../components/page";
import { setTimeout } from "timers";

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
  const [closedModal, setClosedModal] = React.useState(false);

  const preferredColorScheme = usePrefersColorScheme();
  const router = useRouter();

  axios.defaults.baseURL = "http://v26design.co:8000";

  React.useEffect(() => {
    animateSections();
  }, []);

  const animateSections = () => {
    gsap.to(leftSection.current, {
      duration: 1.2,
      opacity: 1,
      delay: 0.1,
      y: 0,
      ease: Power3.easeInOut,
    });

    gsap.to(rightSection.current, {
      duration: 1.2,
      opacity: 1,
      y: 0,
      delay: 0.4,
      ease: Power3.easeInOut,
    });
  };

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
    setIsSubmitting(true);
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
        console.log("error ->", error);
        setError(true);
        setSubmitted(true);
        setIsSubmitting(false);
      });
  };

  const handleCloseModal = () => {
    setError(false);
    animateSections();
  };

  return (
    <div>
      <Head>
        <title>Contact | v26 Design Co.</title>
        <meta name="description" content="Web design company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isSubmitting && (
        <>
          <Overlay
            opacity={1}
            color={`var(--main-bg-color-${preferredColorScheme})`}
            zIndex={5}
            style={{ top: 0, bottom: "-12%" }}
          />
          <Loader position="absolute" />
        </>
      )}

      <Modal
        opened={error}
        onClose={() => handleCloseModal()}
        centered
        styles={{
          modal: {
            backgroundColor: `var(--main-bg-color-${preferredColorScheme})`,
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
      {!isSubmitting && (
        <Page>
          <div className={styles.container}>
            <div className={styles.left} ref={leftSection}>
              <div className={styles.leftContent}>
                <div className={styles.message}>
                  looking forward to working with you
                </div>
              </div>
            </div>
            <div className={styles.right} ref={rightSection}>
              <div
                className={`${styles.arrowAnimation} ${styles.contactArrow}`}
              >
                <IconArrowDownLeft size={"80px"} />
              </div>
              <div className={styles.contentBody}>
                <div className={styles.textfield}>
                  <TextInput
                    placeholder="Jon Snow"
                    label="What's your name?"
                    variant="filled"
                    styles={{
                      label: { color: `var(--color-${preferredColorScheme})` },
                      input: {
                        backgroundColor: `var(--main-bg-color-${preferredColorScheme})`,
                        color: `var(--color-${preferredColorScheme})`,
                      },
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.textfield}>
                  <TextInput
                    placeholder="jon@thenorth.com"
                    label="What's your email?"
                    variant="filled"
                    styles={{
                      label: { color: `var(--color-${preferredColorScheme})` },
                      input: {
                        backgroundColor: `var(--main-bg-color-${preferredColorScheme})`,
                        color: `var(--color-${preferredColorScheme})`,
                      },
                      error: {
                        color: `var(--magenta)`,
                      },
                      invalid: {
                        color: `var(--color-${preferredColorScheme})`,
                        borderColor: `var(--magenta)`,
                      },
                    }}
                    onChange={handleOnEmailEntered}
                    error={
                      showEmailWarning && "Please enter a valid email address"
                    }
                  />
                </div>

                <div className={styles.textfield}>
                  <TextInput
                    placeholder="Web design, Web development"
                    label="What services are you interested in?"
                    variant="filled"
                    styles={{
                      label: { color: `var(--color-${preferredColorScheme})` },
                      input: {
                        backgroundColor: `var(--main-bg-color-${preferredColorScheme})`,
                        color: `var(--color-${preferredColorScheme})`,
                      },
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.textArea}>
                  <Textarea
                    label="Your message"
                    placeholder="Hello, can you help me with .."
                    variant="filled"
                    autosize
                    minRows={12}
                    styles={{
                      label: { color: `var(--color-${preferredColorScheme})` },
                      input: {
                        backgroundColor: `var(--main-bg-color-${preferredColorScheme})`,
                        color: `var(--color-${preferredColorScheme})`,
                      },
                    }}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
                <div className={styles.submitButton}>
                  <Button
                    title="Submit"
                    onClick={handleSubmit}
                    disabled={!enteredText}
                  />
                </div>
              </div>
            </div>
          </div>
        </Page>
      )}
    </div>
  );
}
