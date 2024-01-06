import type { NextPage } from "next";
import Image from "next/image";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
  FloatingLabel,
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
      <div className="border-bottom border-dark justify-content-between row pb-3">
        <div className="col-1 fs-3">
          <FaArrowLeft />
        </div>
        <div className="col-2 fw-bold fs-3">Science</div>
      </div>
      <div className="p-3 row">
        <div className="fs-4">Create Reminder</div>
        <div className="mx-2 border border-dark col-4 mt-2 rounded p-3 bg-white">
          <div className="row">
            <div className="my-2 col-6">Class</div>
            <div className="col-6">
              <Form.Select aria-label="Tahun Ajaran">
                <option value="1">VII - A</option>
                <option value="2">VII - B</option>
                <option value="3">VII - C</option>
              </Form.Select>
            </div>
          </div>

          <div className="row">
            <div className="my-2 col-6">Choose Chapter</div>
            <div className="col-6">
              <Form.Select aria-label="Tahun Ajaran">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div className="mx-2 border border-dark col-12 mt-2 rounded py-3 px-0 bg-white">
          <div className="col-12 px-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Title"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Title" />
            </FloatingLabel>
          </div>
          <div className="col-12 px-3">
            <FloatingLabel controlId="floatingTextarea2" label="Reminder">
              <Form.Control
                as="textarea"
                placeholder="Reminder"
                style={{ height: "10rem" }}
              />
            </FloatingLabel>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Button
          className="px-4 bg-green border-transparet float-end me-1"
          variant="success"
        >
          Add Reminder
        </Button>
      </div>
    </div>
  </AdminLayout>
);

export default Discussion;
