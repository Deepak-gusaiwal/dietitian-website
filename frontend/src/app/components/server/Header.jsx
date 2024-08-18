import React from "react";
import { Container, Logo } from "./helper";
import Link from "next/link";
import { FaAngleDown, FaLocationArrow, FaPlus } from "react-icons/fa6";
import { NavMenuWrapper, NavToggler } from "../client";
const Header = () => {
  return (
    <header className="w-full h-[var(--headerHeight)] sticky top-0 left-0 bg-primary-50">
      <Container className="w-full flex items-center justify-between h-full p-0">
        <Logo className="w-[clamp(100px,10vw,300px)]" />
        <NavMenuWrapper className={`menu ml-auto`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="opacity-50">
            <Link href="#">
              about us
            </Link>
          </li>
          <li className="topLevelDropBox opacity-50">
            <Link href="#">
              our services <FaAngleDown />
            </Link>
            <input type="checkbox" name="" id="services" />
            <label htmlFor="services">
              <FaPlus /> <span>our services</span>{" "}
              <Link href="#">
                <FaLocationArrow />
              </Link>
            </label>
            <ul>
              <li>
                <Link href="#">
                  Therapeutic Diet Plans <FaAngleDown />
                </Link>
                <input type="checkbox" name="" id="Therapeutic" />
                <label htmlFor="Therapeutic">
                  <FaPlus /> <span>Therapeutic Diet Plans</span>{" "}
                  <Link href="#">
                    <FaLocationArrow />
                  </Link>
                </label>
                <ul className="dropBox">
                  <li>
                    <Link href="#">
                      Diet Plan for PCOS
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Diet Plan for Thyroid
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Diet Plan for Cholesterol
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Diet Plan for Diabetes
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Diet Plan for Hypertension
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Diet Plan for Cancer
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">
                  Diet Plans <FaAngleDown />
                </Link>
                <input type="checkbox" name="" id="Diet" />
                <label htmlFor="Diet">
                  <FaPlus /> <span>Diet Plans</span>{" "}
                  <Link href="#">
                    <FaLocationArrow />
                  </Link>
                </label>
                <ul className="dropBox">
                  <li>
                    <Link href="#">
                      Diet Plan for Weight Loss
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Diet Plan for Teenager
                    </Link>
                  </li>
                  <li>
                    <Link href="#/">
                      Pre Marriage Diet Plan
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/healthy-recipes">healthy recipes</Link>
          </li>
          <li className="opacity-50">
            <Link href="#/">
              success stories
            </Link>
          </li>
          <li className="opacity-50">
            <Link href="#">
              media
            </Link>
          </li>
          <li className="opacity-50">
            <Link href="#">
              contact us
            </Link>
          </li>
        </NavMenuWrapper>

        <NavToggler />
      </Container>
    </header>
  );
};

export default Header;
