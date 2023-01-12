import * as React from "react";
import { gsap, Power3 } from "gsap";
import { IconArrowUpLeft, IconArrowDownRight } from "@tabler/icons";
import Page from "../../components/page";
import styles from "./About.module.scss";
import Link from "next/link";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function About() {
  const container = React.useRef(null);
  const mainHeading = React.useRef(null);
  const ballRef = React.useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const myTween = React.useRef(gsap.timeline({ paused: true }));

  const animationOptions = {
    opacity: 1,
    duration: 1.2,
    delay: 0.1,
    ease: Power3.easeInOut,
    y: 0,
  };

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(".section", {
        onEnter(section) {
          gsap.to(section, animationOptions);
        },
        start: "top center",
      });
    }, container);

    gsap.to(mainHeading.current, animationOptions);

    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    gsap.set(ballRef.current, { xPercent: -50, yPercent: -50 });

    const ball = ballRef.current;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.1;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }, []);

  return (
    <div ref={container}>
      <Page>
        <div className={styles.container}>
          <h1 className={styles.mainHeading} ref={mainHeading}>
            Let's create your <span className={styles.italic}>unique</span> web
            presence,
            <span className={`${styles.bold}`}> together</span>
          </h1>
          <section
            className={`${styles.introContainer} ${styles.section} section`}
          >
            <div className={styles.arrowAnimation}>
              <IconArrowDownRight />
            </div>
            <p className={styles.introBody}>
              To be successful in today's digital landscape, you need to
              establish a compelling web presence. That's why with every
              project, we push our work to new heights never compromising
              quality.
            </p>
          </section>

          <section
            className={`${styles.servicesContainer} ${styles.section} section`}
          >
            <div className={styles.serviceContainer}>
              <h2 className={styles.serviceText}>Design.</h2>
              <p className={styles.introBody}>
                We pride ourselves in creating delightful experiences through
                thoughtful and intentional design. Our colloborative and
                iterative approach to design allows us to deliver projects that
                will leave a mark on visitors to your website.
              </p>
            </div>

            <div className={styles.serviceContainer}>
              <h2 className={styles.serviceText}>Development.</h2>
              <p className={styles.introBody}>
                We build scalable websites using the best technologies and
                adhere to industry standards. Our commitment to excellence
                ensures that stakeholders are involved in important technical
                decisions from project inception to launch.
              </p>
            </div>

            <div className={styles.serviceContainer}>
              <h2 className={styles.serviceText}>Maintainance.</h2>
              <p className={styles.introBody}>
                Building a website is only 80% of the work. The remaining 20%
                involves maintaining it. After delivering projects, we continue
                to monitor vital health metrics to ensure smooth operations of
                your site.
              </p>
            </div>
          </section>
        </div>
      </Page>
      <section
        className={`${styles.contactContainer} ${styles.section} ${styles.solidBackground} section`}
      >
        <div className={styles.ball} ref={ballRef} />
        <h1 className={styles.contactHeading}>Let's get in touch</h1>
        <div className={styles.ctaAction}>
          <Link href={"/contact"}>
            <button className={styles.ctaButton}>Get Started</button>
          </Link>
        </div>
        <div className={`${styles.arrowAnimation} ${styles.contactArrow}`}>
          <IconArrowUpLeft size={"80px"} />
        </div>
      </section>
    </div>
  );
}
