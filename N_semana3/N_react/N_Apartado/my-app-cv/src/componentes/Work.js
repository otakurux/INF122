import React from "react";
import IconLink from "./IconLink";
import "../style/Work.css"

const Work = () => {
    return (
        <div class="work">
            <div class="work-container" id="text2">
                <div class="icon-text" >
                    <IconLink span={"Portfolio"} href={""}/>
                </div>
            </div>
            <div class="work-container">
                <div class="icon-text">
                    <IconLink span={"Skills"} href={""}/>
                </div>
            </div>
        </div>
    )
}

export default Work;