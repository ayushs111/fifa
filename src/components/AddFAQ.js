import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function AddFAQ() {
    
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card p-fluid">
                    <h5>Vertical</h5>
                    <div className="field">
                        <label htmlFor="question">question</label>
                        <InputText id="question" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="answer">answer</label>
                        <InputText id="answer" type="text" />
                    </div>
                    <div className="field">
                        <Button label="Submit"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
