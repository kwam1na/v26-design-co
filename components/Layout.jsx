import { SwitchTransition, Transition } from "react-transition-group";
import { useRouter } from "next/router";
import { gsap } from "gsap";

// const TIMEOUT = 2000;
const TIMEOUT = 250;
const gsapDuration = TIMEOUT / 1000;

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <SwitchTransition>
        <Transition
          key={router.pathname}
          timeout={TIMEOUT}
          onEnter={(node) => {
            gsap.set(node, { autoAlpha: 0 });
            gsap.to(node, { autoAlpha: 1, duration: gsapDuration * 3 });
          }}
          onExit={(node) => {
            gsap.to(node, {
              autoAlpha: 0.4,
              y: 56,
              duration: 2.4,
            });
          }}
        >
          {children}
        </Transition>
      </SwitchTransition>
    </div>
  );
};

export default Layout;
