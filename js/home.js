'use strict';

import timeline from "./components/timeline.js";
import stack from "./components/stack.js";
import shelf from "./components/shelf.js";
import projects from "./components/project.js";
import Html from "./engine.js";

/////////////////////////////////////////////
// VARIABLES ////////////////////////////////
/////////////////////////////////////////////

const HTML = new Html(0);
const workState = false; // True if you're working, false if you're looking for a job
const experience = [
    {
      title: HTML.strings.startLaboralExperience_5_Name,
      date: HTML.strings.startLaboralExperience_5_Date,
      content: HTML.strings.startLaboralExperience_5_Content
    },
    {
      title: HTML.strings.startLaboralExperience_4_Name,
      date: HTML.strings.startLaboralExperience_4_Date,
      content: HTML.strings.startLaboralExperience_4_Content
    },
    {
      title: HTML.strings.startLaboralExperience_3_Name,
      date: HTML.strings.startLaboralExperience_3_Date,
      content: HTML.strings.startLaboralExperience_3_Content
    },
    {
      title: HTML.strings.startLaboralExperience_2_Name,
      date: HTML.strings.startLaboralExperience_2_Date,
      content: HTML.strings.startLaboralExperience_2_Content
    },
    {
      title: HTML.strings.startLaboralExperience_1_Name,
      date: HTML.strings.startLaboralExperience_1_Date,
      content: HTML.strings.startLaboralExperience_1_Content
    }
];
const techStack = [
    {
        title: HTML.strings.startTechStackTitle_1,
        icon: "code",
        items: [
            { img: "java.svg", title: HTML.strings.java, desc: HTML.strings.startTechStack_1_1 },
            { img: "kotlin.svg", title: HTML.strings.kotlin, desc: HTML.strings.startTechStack_1_2 },
            { img: "python.svg", title: HTML.strings.python, desc: HTML.strings.startTechStack_1_3 },
            { img: "html5.svg", title: HTML.strings.html, desc: HTML.strings.startTechStack_1_4 },
            { img: "css3.svg", title: HTML.strings.css, desc: HTML.strings.startTechStack_1_5 },
            { img: "javascript.svg", title: HTML.strings.javascript, desc: HTML.strings.startTechStack_1_6 },
            { img: "php.svg", title: HTML.strings.php, desc: HTML.strings.startTechStack_1_7 },
            { img: "sql.svg", title: HTML.strings.sql, desc: HTML.strings.startTechStack_1_8 },
            { img: "powershell.svg", title: HTML.strings.powershell, desc: HTML.strings.startTechStack_1_9 },
        ]
    },
    {
        title: HTML.strings.startTechStackTitle_2,
        icon: "mobile-screen-button",
        items: [
            { img: "kotlin.svg", title: HTML.strings.kotlinMultiplatform, desc: HTML.strings.startTechStack_2_1 },
            { img: "jetpackcompose.svg", title: HTML.strings.composeMultiplatform, desc: HTML.strings.startTechStack_2_2 },
            { img: "jetpackcompose.svg", title: HTML.strings.jetpackCompose, desc: HTML.strings.startTechStack_2_3 },
            { img: "android.svg", title: HTML.strings.daggerHilt, desc: HTML.strings.startTechStack_2_4 },
            { img: "koin.svg", title: HTML.strings.koin, desc: HTML.strings.startTechStack_2_5 },
            { img: "android.svg", title: HTML.strings.mvvm, desc: HTML.strings.startTechStack_2_6 },
            { img: "android.svg", title: HTML.strings.principles, desc: HTML.strings.startTechStack_2_7 },
            { img: "jetpackcompose.svg", title: HTML.strings.navigationCompose, desc: HTML.strings.startTechStack_2_8 },
            { img: "sql.svg", title: HTML.strings.room, desc: HTML.strings.startTechStack_2_9 },
        ]
    },
    {
        title: HTML.strings.startTechStackTitle_3,
        icon: "screwdriver-wrench",
        items: [
            { img: "git.svg", title: HTML.strings.git, desc: HTML.strings.startTechStack_3_1 },
            { img: "vscode.svg", title: HTML.strings.vscode, desc: HTML.strings.startTechStack_3_2 },
            { img: "androidstudio.svg", title: HTML.strings.androidStudio, desc: HTML.strings.startTechStack_3_3 },
            { img: "intellij.svg", title: HTML.strings.intellij, desc: HTML.strings.startTechStack_3_4 },
            { img: "pycharm.svg", title: HTML.strings.pycharm, desc: HTML.strings.startTechStack_3_5 },
            { img: "phpstorm.svg", title: HTML.strings.phpstorm, desc: HTML.strings.startTechStack_3_6 },
            { img: "docker.svg", title: HTML.strings.docker, desc: HTML.strings.startTechStack_3_7 },
            { img: "figma.svg", title: HTML.strings.figma, desc: HTML.strings.startTechStack_3_8 },
        ]
    },
    {
        title: HTML.strings.startTechStackTitle_4,
        icon: "brain",
        items: [
            { img: "ia.svg", title: HTML.strings.chatgpt, desc: HTML.strings.startTechStack_4_1 },
            { img: "ia.svg", title: HTML.strings.gemini, desc: HTML.strings.startTechStack_4_2 },
            { img: "ia.svg", title: HTML.strings.copilot, desc: HTML.strings.startTechStack_4_3 },
            { img: "ia.svg", title: HTML.strings.notebookLM, desc: HTML.strings.startTechStack_4_4 },
            { img: "firebase.svg", title: HTML.strings.firebaseStudio, desc: HTML.strings.startTechStack_4_5 },
        ]
    },
    {
        title: HTML.strings.startTechStackTitle_5,
        icon: "puzzle-piece",
        items: [
            { img: "firebase.svg", title: HTML.strings.firebase, desc: HTML.strings.startTechStack_5_1 },
            { img: "spring.svg", title: HTML.strings.springBoot, desc: HTML.strings.startTechStack_5_2 },
            { img: "hibernate.svg", title: HTML.strings.hibernate, desc: HTML.strings.startTechStack_5_3 },
            { img: "react.svg", title: HTML.strings.react, desc: HTML.strings.startTechStack_5_4 },
            { img: "cakephp.svg", title: HTML.strings.cakephp, desc: HTML.strings.startTechStack_5_5 },
            { img: "django.svg", title: HTML.strings.django, desc: HTML.strings.startTechStack_5_6 },
        ]
    },
    {
        title: HTML.strings.startTechStackTitle_6,
        icon: "database",
        items: [
            { img: "mysql.svg", title: HTML.strings.mysql, desc: HTML.strings.startTechStack_6_1 },
            { img: "mariadb.svg", title: HTML.strings.mariadb, desc: HTML.strings.startTechStack_6_2 },
            { img: "mongodb.svg", title: HTML.strings.mongodb, desc: HTML.strings.startTechStack_6_3 },
            { img: "postgresql.svg", title: HTML.strings.postgresql, desc: HTML.strings.startTechStack_6_4 },
        ]
    }
];
const knowledge = [
    {
        title: HTML.strings.startMicroinformatic,
        content: HTML.strings.startMicroinformaticSkills,
        textButton: HTML.strings.startKnowMore,
        onPress: () => HTML.modal.showInfoModal( HTML.strings.startMicroinformatic, HTML.strings.startMicroinformaticSkillsDetail )
    },
    {
        title: HTML.strings.startCibersecurity,
        content: HTML.strings.startCibersecuritySkills,
        textButton: HTML.strings.startKnowMore,
        onPress: () => HTML.modal.showInfoModal( HTML.strings.startCibersecurity, HTML.strings.startCibersecuritySkillsDetail )
    }
];
const education = [
    {
        title: HTML.strings.startEducation_3_Name,
        date: HTML.strings.startEducation_3_Date,
        content: HTML.strings.startEducation_3_Content
    },
    {
        title: HTML.strings.startEducation_2_Name,
        date: HTML.strings.startEducation_2_Date,
        content: HTML.strings.startEducation_2_Content
    },
    {
        title: HTML.strings.startEducation_1_Name,
        date: HTML.strings.startEducation_1_Date,
        content: HTML.strings.startEducation_1_Content
    }
];
const projectsList = [
    {
        name: HTML.strings.startProjects_2_Name,
        content: HTML.strings.startProjects_2_Content,
        techs: [
            { label: HTML.strings.html, icon: "fa-brands fa-html5" },
            { label: HTML.strings.css, icon: "fa-brands fa-css3" },
            { label: HTML.strings.javascript, icon: "fa-brands fa-js" },
            { label: HTML.strings.oop, icon: "fa-solid fa-code" },
            { label: HTML.strings.multilanguage, icon: "fa-solid fa-language" },
        ],
        images: [
            { src: "digitalvoid/image_1.png", class: "full" },
        ],
        links: [
            { href: HTML.strings.githubLink + "/galvezsh.github.io", text: HTML.strings.startProjectsGithub, icon: "github" },
        ]
    },
    {
        name: HTML.strings.startProjects_1_Name,
        content: HTML.strings.startProjects_1_Content,
        techs: [
            { label: HTML.strings.kotlinMultiplatform, icon: "fa-brands fa-android" },
            { label: HTML.strings.jetpackCompose, icon: "fa-brands fa-android" },
            { label: HTML.strings.mvvm, icon: "fa-brands fa-android" },
            { label: HTML.strings.daggerHilt, icon: "fa-brands fa-android" },
            { label: HTML.strings.retrofit, icon: "fa-brands fa-android" },
            { label: HTML.strings.paging3, icon: "fa-brands fa-android" }
        ],
        images: [
            { src: "rickandmorty/image_1.png", class: "screenshot" },
            { src: "rickandmorty/image_2.png", class: "screenshot" },
            { src: "rickandmorty/image_3.png", class: "screenshot" },
            { src: "rickandmorty/image_4.png", class: "screenshot" },
            { src: "rickandmorty/image_5.png", class: "screenshot" },
            { src: "rickandmorty/image_6.png", class: "screenshot" },
            { src: "rickandmorty/image_7.png", class: "screenshot" },
            { src: "rickandmorty/image_8.png", class: "screenshot" },
        ],
        links: [
            { href: HTML.strings.githubLink + "/RickAndMortyDB", text: HTML.strings.startProjectsGithub, icon: "github" },
        ]
    }
];

/////////////////////////////////////////////
// SCRIPT ///////////////////////////////////
/////////////////////////////////////////////

document.getElementById("header").innerHTML = createHeader( HTML.strings, workState );
document.getElementById("experience").innerHTML = timeline( HTML.strings.startLaboralExperience, "briefcase", experience );
document.getElementById("stack").innerHTML = stack( HTML.strings.startTechStack, "layer-group", techStack );
document.getElementById("knowledge").appendChild( shelf( HTML.strings.startKnowledge, "book", knowledge ) );
document.getElementById("education").innerHTML = timeline( HTML.strings.startEducation, "graduation-cap", education );
document.getElementById("projects").innerHTML = projects( HTML.strings.startProjects, "laptop-code", projectsList );

/////////////////////////////////////////////
// FUNCTIONS ////////////////////////////////
/////////////////////////////////////////////

function createHeader( strings, workState ) {
    return `
        <img src="../resources/images/developer.png">

        <div class="flex-header">
            <h1>${strings.startHello}</h1>
            <span>${workState ? strings.startAlreadyWorking : strings.startReadyToWork}</span>
        </div>

        <p>${strings.startSmallDescription}</p>

        <div class="list-links">
            <a href="${strings.linkedinLink}" class="list-item" target="_blank">
                <i class="fa-brands fa-linkedin"></i> ${strings.linkedin}
            </a>
            <a href="${strings.githubLink}" class="list-item" target="_blank">
                <i class="fa-brands fa-github"></i> ${strings.github}
            </a>
            <a href="mailto:${strings.emailLink}" class="list-item">
                <i class="fa-solid fa-envelope"></i> ${strings.email}
            </a>
        </div>
    `;
}