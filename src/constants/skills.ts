import { IconType } from 'react-icons';
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di';
import { FaJava, FaWindows } from 'react-icons/fa';
import { GrOracle } from 'react-icons/gr';
import {
  SiAndroid,
  SiAndroidstudio,
  SiApachecassandra,
  SiApachemaven,
  SiApachenetbeanside,
  SiC,
  SiCplusplus,
  SiEclipseide,
  SiFirebase,
  SiGerrit,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglemaps,
  SiGradle,
  SiGraphql,
  SiInsomnia,
  SiIos,
  SiJavascript,
  SiJenkins,
  SiJetpackcompose,
  SiJson,
  SiJunit5,
  SiKotlin,
  SiLinux,
  SiMacos,
  SiMercurial,
  SiMysql,
  SiNextdotjs,
  SiOkta,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReactivex,
  SiSpring,
  SiSpringboot,
  SiSqlite,
  SiSubversion,
  SiSwift,
  SiXcode,
} from 'react-icons/si';
import { TbBrandCSharp, TbFileTypeXml } from 'react-icons/tb';

export type Skill = {
  name: string;
  icon?: IconType;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

/** Widely-used technologies highlighted on the home page */
export const featuredSkills: Skill[] = [
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Java', icon: FaJava },
  { name: 'Android', icon: SiAndroid },
  { name: 'Jetpack Compose', icon: SiJetpackcompose },
  { name: 'Python', icon: SiPython },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'SQLite', icon: SiSqlite },
  { name: 'Git', icon: SiGit },
  { name: 'Jenkins', icon: SiJenkins },
];

/** Full list of skills, extracted from the resume */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: SiPython },
      { name: 'Swift', icon: SiSwift },
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C#', icon: TbBrandCSharp },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Android & Mobile',
    skills: [
      { name: 'Android SDK', icon: SiAndroid },
      { name: 'Jetpack Compose', icon: SiJetpackcompose },
      { name: 'Coroutines & Flows' },
      { name: 'RxJava', icon: SiReactivex },
      { name: 'MVVM / MVP / MVC' },
      { name: 'Data Binding' },
      { name: 'Dependency Injection' },
      { name: 'Navigation Component' },
      { name: 'Room' },
      { name: 'Retrofit' },
      { name: 'RecyclerView' },
      { name: 'Android TV (Leanback)' },
      { name: 'Push Notifications' },
      { name: 'Biometric Authentication' },
      { name: 'Google Maps API', icon: SiGooglemaps },
      { name: 'Okta', icon: SiOkta },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'iOS (Swift)', icon: SiIos },
      { name: 'Google Play Publishing' },
    ],
  },
  {
    title: 'Backend & Full Stack',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Spring (MVC, JDBC, Cloud)', icon: SiSpring },
      { name: 'J2EE' },
      { name: 'Microservices' },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Python Scripting', icon: SiPython },
      { name: 'Plone' },
    ],
  },
  {
    title: 'APIs & Data Formats',
    skills: [
      { name: 'RESTful APIs' },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'SOAP' },
      { name: 'JSON', icon: SiJson },
      { name: 'XML / XMLPullParser', icon: TbFileTypeXml },
      { name: 'Third-party APIs (Twitter, Facebook, Google)' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQLite', icon: SiSqlite },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Oracle', icon: GrOracle },
      { name: 'SQL Server', icon: DiMsqlServer },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Cassandra', icon: SiApachecassandra },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'JUnit', icon: SiJunit5 },
      { name: 'Mockito / PowerMock' },
      { name: 'Espresso' },
      { name: 'Robolectric' },
      { name: 'AndroidX Test' },
      { name: 'Unit & Integration Testing' },
      { name: 'Test Driven Development' },
    ],
  },
  {
    title: 'Build, CI/CD & Tools',
    skills: [
      { name: 'Gradle', icon: SiGradle },
      { name: 'Maven', icon: SiApachemaven },
      { name: 'Buck' },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Postman', icon: SiPostman },
      { name: 'Insomnia', icon: SiInsomnia },
      { name: 'Phabricator' },
      { name: 'Logcat' },
      { name: 'Scuba / Scribe' },
    ],
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'GitLab', icon: SiGitlab },
      { name: 'Gerrit', icon: SiGerrit },
      { name: 'Mercurial', icon: SiMercurial },
      { name: 'SVN', icon: SiSubversion },
      { name: 'Perforce' },
    ],
  },
  {
    title: 'IDEs',
    skills: [
      { name: 'Android Studio', icon: SiAndroidstudio },
      { name: 'Xcode', icon: SiXcode },
      { name: 'Eclipse / MyEclipse', icon: SiEclipseide },
      { name: 'Spring Tool Suite (STS)', icon: SiSpring },
      { name: 'NetBeans', icon: SiApachenetbeanside },
      { name: 'Visual Studio', icon: DiVisualstudio },
    ],
  },
  {
    title: 'Operating Systems',
    skills: [
      { name: 'Android OS', icon: SiAndroid },
      { name: 'iOS', icon: SiIos },
      { name: 'Linux', icon: SiLinux },
      { name: 'macOS', icon: SiMacos },
      { name: 'Windows', icon: FaWindows },
    ],
  },
  {
    title: 'Methodologies',
    skills: [
      { name: 'Agile / SAFe' },
      { name: 'SDLC' },
      { name: 'Code Reviews' },
      { name: 'System Design & Architecture' },
      { name: 'Performance Tuning' },
      { name: 'Threading & Modularization' },
      { name: 'Large-scale Code Mods' },
    ],
  },
];
