"use client";

import Image from "next/image";
import NavButton from "./ButtonCollection/NavButton";
import Button from "./ButtonCollection/Button";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import useWindowWidth from "@/app/_utilities/useWindowWidth";

export default function Footer() {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <footer className="bg-[var(--color-border-tertiary)]">
        <div className="mx-auto py-[var(--spacing-xl)] px-[var(--spacing-lg)]">
          <div className="flex flex-col items-start justify-between gap-[var(--spacing-xl)] h-full">
              <div className="flex flex-col items-start justify-between p-[var(--spacing-m)] gap-[var(--spacing-xl)] h-full">
                <Button
                  href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="large"
                  trailingIcon="/flower.svg"
                  className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
                >
                  Donate
                </Button>
                <div className="flex-1  h-full">
                  <Image
                    src="/Footer/Donate.png"
                    alt="Donate to JH Mural Project"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col border-t-[4px] border-[var(--color-content-secondary)] w-full">

                <div className="border-b-[1px] border-[var(--color-content-secondary)] my-0">
                    <NavButton
                      variant="secondary"
                      href="/newsletter"
                      trailingIcon={<FaEnvelope className="w-4 h-4" />}
                      className="w-full !web-text-m-semibold "
                    >
                      Join our newsletter
                    </NavButton>
                </div>

                <div className="border-b-[1px] border-[var(--color-content-secondary)] my-0">
                    <NavButton
                      variant="secondary"
                      href="https://www.instagram.com/jhmuralproject"
                      target="_blank"
                      rel="noopener noreferrer"
                      trailingIcon={<FaInstagram className="w-4 h-4" />}
                      className="w-full  !web-text-m-semibold"
                    >
                      Follow us on Instagram
                    </NavButton>
                </div>

                <div className="border-b-[1px] border-[var(--color-border-primary)] my-0"></div>
                    <NavButton
                      variant="secondary"
                      href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                      target="_blank"
                      rel="noopener noreferrer"
                      trailingIcon={<FaFacebook className="w-4 h-4" />}
                      className="w-full !web-text-m-semibold"
                    >
                      Follow us on Facebook
                    </NavButton>
              </div>
          </div>
        </div>

        <p className="text-sm text-[var(--color-content-primary)] pt-[var(--spacing-lg)] pb-[var(--spacing-2xl)] px-[var(--spacing-lg)]">
          Jackson Heights Mural Project Inc. is a federally recognized 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law. EIN: 39-4461083.
        </p>

      </footer>
    );
  }



if (width <= 1200) {
    return (
      <footer className="bg-[var(--color-border-tertiary)]">
        <div className="mx-auto py-[var(--spacing-xl)] px-[var(--spacing-lg)]">
            <div className="flex flex-col items-start justify-between gap-[var(--spacing-xl)] h-full">
                <div className="flex items-start justify-between p-[var(--spacing-lg)] gap-[var(--spacing-xl)] h-full">
                    <div className="w-1/2 h-full">
                      <Image
                        src="/Footer/Donate.png"
                        alt="Donate to JH Mural Project"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    <Button
                      href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="large"
                      trailingIcon="/flower.svg"
                      className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
                    >
                      Donate
                    </Button>
                </div>


                <div className="flex flex-col border-t-[4px] border-[var(--color-content-secondary)] w-full">
                  <div className="border-b-[1px] border-[var(--color-content-secondary)] my-0">
                      <NavButton
                        variant="secondary"
                        href="/newsletter"
                        trailingIcon={<FaEnvelope className="w-4 h-4" />}
                        className="w-full !web-text-m-semibold "
                      >
                        Join our newsletter
                      </NavButton>
                  </div>

                  <div className="border-b-[1px] border-[var(--color-content-secondary)] my-0">
                      <NavButton
                        variant="secondary"
                        href="https://www.instagram.com/jhmuralproject"
                        target="_blank"
                        rel="noopener noreferrer"
                        trailingIcon={<FaInstagram className="w-4 h-4" />}
                        className="w-full  !web-text-m-semibold"
                      >
                        Follow us on Instagram
                      </NavButton>
                  </div>

                  <div className="border-b-[1px] border-[var(--color-border-primary)] my-0"></div>
                      <NavButton
                        variant="secondary"
                        href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                        target="_blank"
                        rel="noopener noreferrer"
                        trailingIcon={<FaFacebook className="w-4 h-4" />}
                        className="w-full !web-text-m-semibold"
                      >
                        Follow us on Facebook
                      </NavButton>
                </div>

            </div>
        </div>

        <p className="text-sm text-[var(--color-content-primary)] pt-[var(--spacing-lg)] pb-[var(--spacing-2xl)] px-[var(--spacing-lg)]">
          Jackson Heights Mural Project Inc. is a federally recognized 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law. EIN: 39-4461083.
        </p>
      </footer>
    );
  }



  if (width <= 1400) {
    return (
      <footer className="bg-[var(--color-border-tertiary)]">
            <div className="mx-auto py-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
                <div className="flex items-stretch gap-[var(--spacing-10xl)]">
                  <div className="flex-1 align-start min-w-0">
                    <Image
                      src="/Footer/Donate.png"
                      alt="Donate to JH Mural Project"
                      width={600}
                      height={400}
                      className="w-auto h-auto max-w-full object-contain"
                    />
                     <p className=" web-text-s-medium text-[var(--color-content-primary)] py-[var(--spacing-lg)]">
                       Jackson Heights Mural Project Inc. is a federally recognized 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law. EIN: 39-4461083.
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between flex-1 min-w-0">
                    <Button
                      href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="large"
                      trailingIcon="/flower.svg"
                      className=" px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
                    >
                      Donate
                    </Button>

                    <div className="flex flex-col border-t-[4px] pb-[var(--spacing-6xl)] border-[var(--color-content-secondary)] w-full self-stretch">
                      <NavButton
                        variant="secondary"
                        href="/newsletter"
                        trailingIcon={<FaEnvelope className="w-4 h-4" />}
                        className="!w-full !web-text-lg-semibold !py-[var(--spacing-lg)] !px-[var(--spacing-m)] justify-between items-center self-stretch"
                      >
                        Join our newsletter
                      </NavButton>

                      <div className="border-t border-[var(--color-border-primary)] my-0"></div>
                      <NavButton
                        variant="secondary"
                        href="https://www.instagram.com/jhmuralproject"
                        target="_blank"
                        rel="noopener noreferrer"
                        trailingIcon={<FaInstagram className="w-4 h-4" />}
                        className="!w-full !web-text-lg-semibold !py-[var(--spacing-lg)] !px-[var(--spacing-m)] justify-between items-center self-stretch"
                      >
                        Follow us on Instagram
                      </NavButton>
                      <div className="border-t border-[var(--color-border-primary)] my-0"></div>
                      <NavButton
                        variant="secondary"
                        href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                        target="_blank"
                        rel="noopener noreferrer"
                        trailingIcon={<FaFacebook className="w-4 h-4" />}
                        className="!w-full !web-text-lg-semibold !py-[var(--spacing-lg)] !px-[var(--spacing-m)] justify-between items-center self-stretch"
                      >
                        Follow us on Facebook
                      </NavButton>
                      <div className="border-t border-[var(--color-border-primary)] "></div>
                    
                    </div>

                  </div>
                </div>
           </div>
       
      </footer>
    );
  }

  // large desktop (> 1400px)
  return (
     <footer className="bg-[var(--color-border-tertiary)]">
            <div className="mx-auto max-w-[2000px] py-[var(--spacing-10xl)] px-[var(--spacing-6xl)]">
                <div className="flex items-stretch justify-between gap-[var(--spacing-10xl)]">
                  <div className="flex-1 align-start max-w-[700px]">
                    <Image
                      src="/Footer/Donate.png"
                      alt="Donate to JH Mural Project"
                      width={600}
                      height={400}
                      className="w-auto h-auto  object-contain"
                    />
                     <p className=" web-text-s-medium text-[var(--color-content-primary)] py-[var(--spacing-lg)]">
                       Jackson Heights Mural Project Inc. is a federally recognized 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law. EIN: 39-4461083.
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between flex-1 max-w-[800px] min-w-0">
                    <Button
                      href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="large"
                      trailingIcon="/flower.svg"
                      className=" px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
                    >
                      Donate
                    </Button>

                    <div className="flex flex-col border-t-[4px] pb-[var(--spacing-6xl)] border-[var(--color-content-secondary)] w-full self-stretch">
                      <NavButton
                        variant="secondary"
                        href="/newsletter"
                        trailingIcon={<FaEnvelope className="w-4 h-4" />}
                        className="!w-full !web-text-lg-semibold !py-[var(--spacing-lg)] !px-[var(--spacing-m)] justify-between items-center self-stretch"
                      >
                        Join our newsletter
                      </NavButton>

                      <div className="border-t border-[var(--color-border-primary)] my-0"></div>
                      <NavButton
                        variant="secondary"
                        href="https://www.instagram.com/jhmuralproject"
                        target="_blank"
                        rel="noopener noreferrer"
                        trailingIcon={<FaInstagram className="w-4 h-4" />}
                        className="!w-full !web-text-lg-semibold !py-[var(--spacing-lg)] !px-[var(--spacing-m)] justify-between items-center self-stretch"
                      >
                        Follow us on Instagram
                      </NavButton>
                      <div className="border-t border-[var(--color-border-primary)] my-0"></div>
                      <NavButton
                        variant="secondary"
                        href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                        target="_blank"
                        rel="noopener noreferrer"
                        trailingIcon={<FaFacebook className="w-4 h-4" />}
                        className="!w-full !web-text-lg-semibold !py-[var(--spacing-lg)] !px-[var(--spacing-m)] justify-between items-center self-stretch"
                      >
                        Follow us on Facebook
                      </NavButton>
                      <div className="border-t border-[var(--color-border-primary)] "></div>
                    
                    </div>

                  </div>
                </div>
           </div>
       
      </footer>
    );
  }

