import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

export default function ViewFAQ() {
    const data = [
        {
            question: "what is your name",
            answer: "ayush",
        },
        {
            question: "what is your name",
            answer: "ayush",
        },
        {
            question: "what is your name",
            answer: "ayush",
        },
    ];
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>FAQs</h5>
                    <Accordion activeIndex={0}>
                        {data.map((e, i) => {
                            return (
                                <AccordionTab key={"faq" + i} header={e.question}>
                                    <p>{e.answer}</p>
                                </AccordionTab>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
