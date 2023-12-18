import type { NextPage } from "next";
import Image from "next/image";
import {
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
  },
  {
    id: 2,
    Title: "Math",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Aljabr",
  },
  {
    id: 3,
    Title: "Biology",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Fotosintesis",
  },
  {
    id: 4,
    Title: "Cheimstry",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Periodic Table",
  },
  {
    id: 5,
    Title: "Cheimstry",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Periodic Table",
  },
];

const Course: NextPage = () => (
  <AdminLayout>
    <div className="row">
      <div className="col-md-3">
        <Form.Select aria-label="Choose Semester">
          <option value="1">Choose Semester 1</option>
          <option value="2">Choose Semester 2</option>
          <option value="3">Choose Semester 3</option>
        </Form.Select>
      </div>
    </div>
    <div className="row">
      {listMateri.map((val: any, idx: any) => {
        return (
          <div className="col-md-3 mt-4">
            <div className="rounded px-4 py-3 bg-white shadow">
              <div className="row fs-4 fw-bolder">{val.Title}</div>
              <div className="row fs-5 mt-2">{val.Chapter}</div>
              <div className="row fs-6 mt-2">{val.SubTitle}</div>
            </div>
          </div>
        );
      })}
    </div>
  </AdminLayout>
);

export default Course;
