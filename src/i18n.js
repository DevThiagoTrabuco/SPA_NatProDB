import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";

const savedLang = localStorage.getItem("language") || "pt";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...en,
        team: {
          1: "Graduated in Pharmaceutical Sciences from the State University of Feira de Santana (2004), holding a Master's degree (2007) and a Doctorate (2012) from the Postgraduate Program in Biotechnology at the State University of Feira de Santana/Fiocruz. Currently, he is an Associate Professor at the State University of Feira de Santana (UEFS), teaching Principles of Pharmacology, Pharmacodynamics, Basic Pharmacology, and Clinical Pharmacology to Nursing and Pharmacy undergraduate programs. He is also a faculty member of the Postgraduate Programs in Pharmaceutical Sciences (UEFS) and Biotechnology (UEFS/Fiocruz). His experience encompasses the field of Pharmacy, with emphasis on Medicinal Chemistry, focusing primarily on drugs, medications, molecular modeling, and enzymology.",

          2: "Holds a degree in Electronic Engineering (1988), a degree in Electrical Engineering (1989), and a Master's degree in Electrical Engineering (2001), all from the Federal University of Bahia. He earned a Ph.D. in Computer Science (2007) from the Autonomous University of Barcelona, Spain. Currently, he is a Full Professor in the Department of Technology, a permanent faculty member of the Postgraduate Program in Computer Science, and coordinator of the High-Performance Computing Laboratory (LACAD) at the State University of Feira de Santana. He also serves as a collaborating professor in the Postgraduate Program in Mechatronics at the Federal University of Bahia. His expertise spans Computer Science (Artificial Intelligence and High-Performance Computing) and Electronic Engineering (Computer Architecture), focusing primarily on Computer Vision and Bioinformatics.",

          3: "Undergraduate student in Pharmacy at the State University of Feira de Santana (UEFS), with an academic mobility period completed at the Polytechnic Institute of Bragança (IPB), Portugal. She volunteers in Scientific Initiation, emphasizing in silico techniques for Research and Development of new drugs at the Molecular Modeling Laboratory (LMM) at UEFS. She serves as President of the Academic League of Clinical Pharmacology (LAFAC) and is an active student member of the Permanent Evaluation Committee (CPA) and the Pharmacy Academic Directory at UEFS. Additionally, she volunteers in the Mentoring Academy of the Polytechnic Institute of Bragança.",

          4: "Undergraduate student in Pharmacy at the State University of Feira de Santana (UEFS). Volunteer at the Molecular Modeling Laboratory (LMM) at UEFS, contributing to projects integrating pharmaceutical science and information technology. Holds a Technical degree in Systems Development from SENAI Feira de Santana, working as a full-stack developer responsible for the development and implementation of the laboratory's website, utilizing the MERN stack (MongoDB, Express.js, React, Node.js).",
        },
      },
    },
    pt: {
      translation: {
        ...pt,
        team: {
          1: "Formou-se em Ciências Farmacêuticas pela Universidade Estadual de Feira de Santana (2004), possui mestrado (2007) e doutorado (2012) pelo Programa de Pós-Graduação em Biotecnologia pela Universidade Estadual de Feira de Santana/FioCruz. Atualmente é professor Adjunto-A da Universidade Estadual de Feira de Santana (UEFS), na qual ministra as disciplinas de Princípios de Farmacologia, Farmacodinâmica, Farmacologia Básica e Farmacologia Clínica para os cursos de Graduação em Enfermagem e Farmácia; Faz parte do corpo docente dos Programas de Pós-graduação em Ciências Farmacêuticas/UEFS e do programa de Pós-graduação em Biotecnologia UEFS/FioCruz . Tem experiência na área de Farmácia, com ênfase em Química Medicinal, atuando principalmente nos seguintes temas: fármacos, medicamentos, modelagem molecular e enzimologia.",
          2: "Possui graduação em Engenharia Eletrônica (1988), graduação em Engenharia Eletrotécnica (1989) e mestrado em Engenharia Elétrica (2001), todos pela Universidade Federal da Bahia. É doutor em Ciência da Computação (2007) pela Universidad Autonoma de Barcelona (Espanha). Atualmente é professor titular do Departamento de Tecnologia, professor permanente do Programa de Pós-Graduação em Ciência da Computação e coordenador do Laboratório de Computação de Alto Desempenho (LACAD) da Universidade Estadual de Feira de Santana, além de atuar como professor colaborador do Programa de Pós-Graduação em Mecatrônica da Universidade Federal da Bahia. Tem experiência nas áreas de Ciência da Computação (Inteligência Artificial e Computação de Alto Desempenho) e Engenharia Eletrônica (Arquitetura de Computadores), atuando principalmente nas áreas de Visão Computacional e Bioinformática.",
          3: "Graduanda em Farmácia pela Universidade Estadual de Feira de Santana (2025), com período de mobilidade acadêmica realizado no Instituto Politécnico de Bragança (IPB), Portugal. Voluntária de Iniciação Científica com ênfase em técnicas in silico para Pesquisa e Desenvolvimento de novos fármacos no Laboratório de Modelagem Molecular (LMM) da Universidade Estadual de Feira de Santana. Presidente da Liga Acadêmica de Farmacologia Clínica (LAFAC). Membro estudantil da Comissão Permanente de Avaliação (CPA) e do Diretório Acadêmico de Farmácia do curso de Farmácia da Universidade Estadual de Feira de Santana. Voluntária do Mentoring Academy do Instituto Poliécnico de Bragança.",
          4: "Graduando em Farmácia pela Universidade Estadual de Feira de Santana (UEFS). Voluntário no Laboratório de Modelagem Molecular (LMM) da UEFS, contribuindo para projetos que integram ciência farmacêutica e tecnologia da informação. Técnico em Desenvolvimento de Sistemas pelo SENAI Feira de Santana, atuando como desenvolvedor full stack responsável pelo desenvolvimento e implementação do website do laboratório, utilizando a stack MERN (MongoDB, Express.js, React, Node.js).",
        },
      },
    },
  },
  lng: savedLang,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
