import * as React from "react";
import { gsap, Power3 } from "gsap";
import styles from "../styles/Contact.module.scss";
import Button from "../components/button";
import { TextInput, Textarea, Overlay, Modal } from "@mantine/core";
import { IconArrowDownLeft } from "@tabler/icons";
import * as EmailValidator from "email-validator";
import { usePrefersColorScheme } from "../hooks/usePrefersColorScheme";
import { useRouter } from "next/router";
import axios from "axios";
import Page from "../components/page";
import config from "../config.json";
import LoadingOverlay from "../components/loading-overlay";

export default function Contact() {
  const leftSection = React.useRef(null);
  const rightSection = React.useRef(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [services, setServices] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showEmailWarning, setShowEmailWarning] = React.useState(false);
  const [error, setError] = React.useState(false);

  const preferredColorScheme = usePrefersColorScheme();
  const router = useRouter();
  axios.defaults.baseURL = config.prod.axiosBaseURL;

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

  const enteredText =
    name !== "" && email !== "" && services !== "" && message !== "";

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
        services: services,
        message: message,
      })
      .then((response) => {
        if (response.status === 200) {
          let uuid = self.crypto.randomUUID();
          router.push(`/confirm?token='${uuid}'`);
          setIsSubmitting(false);
        }
      })
      .catch((error) => {
        console.log("error ->", error);
        setError(true);
        setIsSubmitting(false);
      });
  };

  const handleCloseModal = () => {
    setError(false);
    animateSections();
  };

  return (
    <div>
      {isSubmitting && <LoadingOverlay transparent />}

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
            <span className={styles.email}> support@v26design.co</span>
          </p>
        </div>
      </Modal>
      {!isSubmitting && (
        <Page title={"Contact | v26 Design Co."}>
          <div className={styles.container}>
            <div className={styles.left} ref={leftSection}>
              <div className={styles.leftContent}>
                <div className={styles.message}>
                  looking forward to working with you.
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
                    defaultValue={name !== "" ? name : undefined}
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
                    defaultValue={email !== "" ? email : undefined}
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
                    onChange={(e) => setServices(e.target.value)}
                    defaultValue={services !== "" ? services : undefined}
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
                    onChange={(e) => setMessage(e.target.value)}
                    defaultValue={message !== "" ? message : undefined}
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
