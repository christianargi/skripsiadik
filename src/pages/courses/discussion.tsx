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
      <CoursesHeader bab={bab} />
      <div className="p-3 row">
        <div className="fs-4">Fotosintesis</div>
        <div className="col-12 border border-dark rounded my-2 justify-content-between">
          <div className="row px-3">
            <div className="col-1 p-2">
              <div className="teacher-profile-discussion">
                <Image
                  fill
                  src="/assets/img/avatars/8.jpg"
                  alt="user@email.com"
                  className="rounded-circle position-static"
                />
              </div>
            </div>
            <div className="col-8 py-2 ps-5">
              <div className="fs-5 py-1">Novaria Kemmel S.Pd.</div>
              <div className="fs-6 py-1">Teacher | IPA - 1</div>
              <div className="fs-6 py-1">Sat, 11 Nov 2023</div>
            </div>
            <div className="col-3 align-items-center d-flex fs-4">
              Lajutan Hasil Diskusi Fotosintesis
            </div>
          </div>
        </div>
        <div className="col-12 border border-dark rounded my-2 justify-content-between">
          <div className="row px-3">
            <div className="col-1 p-2">
              <div className="teacher-profile-discussion">
                <Image
                  fill
                  src="/assets/img/avatars/8.jpg"
                  alt="user@email.com"
                  className="rounded-circle position-static"
                />
              </div>
            </div>
            <div className="col-8 py-2 ps-5">
              <div className="fs-5 py-1">Novaria Kemmel S.Pd.</div>
              <div className="fs-6 py-1">Teacher | IPA - 1</div>
              <div className="fs-6 py-1">Sat, 11 Nov 2023</div>
            </div>
            <div className="col-3 align-items-center d-flex fs-4">
              Lajutan Hasil Diskusi Fotosintesis
            </div>
          </div>
        </div>
        <div className="col-12 border border-dark rounded my-2 justify-content-between">
          <div className="row px-3">
            <div className="col-1 p-2">
              <div className="teacher-profile-discussion">
                <Image
                  fill
                  src="/assets/img/avatars/8.jpg"
                  alt="user@email.com"
                  className="rounded-circle position-static"
                />
              </div>
            </div>
            <div className="col-8 py-2 ps-5">
              <div className="fs-5 py-1">Novaria Kemmel S.Pd.</div>
              <div className="fs-6 py-1">Teacher | IPA - 1</div>
              <div className="fs-6 py-1">Sat, 11 Nov 2023</div>
            </div>
            <div className="col-3 align-items-center d-flex fs-4">
              Lajutan Hasil Diskusi Fotosintesis
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default Discussion;
