"use client";

import Link from "next/link";
import ProcessStepCard, { type ProcessStep } from "./ProcessStepCard";

interface ProcessStepsProps {
  data: ProcessStep[];
  gridclass?: string;
  boxheight?: string;
}

export default function Grid({
  data,
  gridclass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ",
  boxheight,
}: ProcessStepsProps) {
  return (
    <section className="pt-52">
      <div className="">
        <div
          className={`grid ${gridclass}  gap-12 md:gap-13 2xl:gap-x-7.5 2xl:gap-y-52`}
        >
          {data.map((step, i) => {
            const hasUrl = Boolean(step.url && step.url.trim() !== "");
            const Wrapper = hasUrl ? Link : "div";
            const wrapperProps = hasUrl ? { href: step.url as string } : {};

            return (
              <div key={i} className="relative group">
                <Wrapper
                  {...(wrapperProps as any)}
                  className={hasUrl ? "group-hover:text-primary" : ""}
                >
                  <ProcessStepCard step={step} hasUrl={hasUrl} boxheight={boxheight} />
                </Wrapper>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}