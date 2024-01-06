import type { NextPage } from "next";
import Image from "next/image";
import {
  Button,
  // Button,
  // ButtonGroup,
  Card,
  // Dropdown,
  // ProgressBar,
} from "react-bootstrap";
// import { Bar, Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { IoChatbubblesOutline } from "react-icons/io5";
import React from "react";
import { AdminLayout } from "@layout";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { FaArrowLeft } from "react-icons/fa";
import { CoursesHeader } from "@components/Courses/coursesHeader";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

const forumList: any = [
  {
    id: "1",
    forumName: "Sosiologi",
  },
  {
    id: "2",
    forumName: "Ekonomi",
  },
  {
    id: "3",
    forumName: "Sejarah",
  },
  {
    id: "4",
    forumName: "Matematika",
  },
  {
    id: "5",
    forumName: "Kimia",
  },
  {
    id: "6",
    forumName: "Fisika",
  },
  {
    id: "7",
    forumName: "Biologi",
  },
];

const listMateri = [
  {
    id: 1,
    Title: "Science",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Vector",
    Guru: "Novaria Kemmel S.Pd.",
  },
  {
    id: 2,
    Title: "Math",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Aljabr",
    Guru: "Novaria Kemmel S.Pd.",
  },
  {
    id: 3,
    Title: "Biology",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Fotosintesis",
    Guru: "Novaria Kemmel S.Pd.",
  },
  {
    id: 4,
    Title: "Cheimstry",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Periodic Table",
    Guru: "Novaria Kemmel S.Pd.",
  },
  {
    id: 5,
    Title: "Cheimstry",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Periodic Table",
    Guru: "Novaria Kemmel S.Pd.",
  },
];

const bab = [
  { id: 1, name: "Bab - 1" },
  { id: 2, name: "Bab - 2" },
  { id: 3, name: "Bab - 4" },
  { id: 4, name: "Bab - 5" },
  { id: 5, name: "Bab - 6" },
  { id: 6, name: "Bab - 7" },
  { id: 7, name: "Bab - 8" },
];

const Discussion: NextPage = () => (
  <AdminLayout>
    <div className="row">
      {/* <CoursesHeader bab={bab} /> */}
      <div className="justify-content-between row">
        <div className="col-1 fs-3">
          <FaArrowLeft />
        </div>
        <div className="col-11 fw-bold fs-3 d-flex align-items-center justify-content-center">
          Peningkatan Literasi
        </div>
      </div>
      <div className="col-12 mt-3">
        <Image
          className="max-height-forum-dashboard overlay-dashboard"
          src="/assets/img/dummyImage.png"
          alt=""
          width={300}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit
        turpis cursus in hac habitasse platea. Ipsum dolor sit amet consectetur.
        At risus viverra adipiscing at in. Eu tincidunt tortor aliquam nulla
        facilisi cras fermentum odio. Et netus et malesuada fames ac turpis. Id
        semper risus in hendrerit gravida. Sagittis aliquam malesuada bibendum
        arcu vitae elementum. Neque ornare aenean euismod elementum nisi quis
        eleifend quam. Amet massa vitae tortor condimentum lacinia quis vel
        eros. Amet dictum sit amet justo donec enim diam vulputate ut. Arcu
        vitae elementum curabitur vitae nunc sed velit dignissim.
      </div>
    </div>
  </AdminLayout>
);

export default Discussion;
