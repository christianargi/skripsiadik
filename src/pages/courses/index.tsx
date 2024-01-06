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
    Kelas: "XI IPA 2",
  },
  {
    id: 2,
    Title: "Math",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Aljabr",
    Kelas: "XI IPA 2",
  },
  {
    id: 3,
    Title: "Biology",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Fotosintesis",
    Kelas: "XI IPA 2",
  },
  {
    id: 4,
    Title: "Cheimstry",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Periodic Table",
    Kelas: "XI IPA 2",
  },
  {
    id: 5,
    Title: "Cheimstry",
    Chapter: "Chapter 4 of 12",
    SubTitle: "Periodic Table",
    Kelas: "XI IPA 2",
  },
];

const Course: NextPage = () => (
  <AdminLayout>
    <div className="row">
      <div className="col-md-3 ms-2">
        <Form.Select aria-label="Tahun Ajaran">
          <option value="1">Tahun Ajaran : 2023 / 2024</option>
          <option value="2">Tahun Ajaran : 2023 / 2024</option>
          <option value="3">Tahun Ajaran : 2023 / 2024</option>
        </Form.Select>
      </div>
    </div>
    <div className="row px-3 py-3">
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mata Pelajaran</th>
            <th>Kelas</th>
            <th>Konten</th>
          </tr>
        </thead>
        <tbody>
          {listMateri.map((val: any, idx: any) => {
            return (
              <tr>
                <td>{val.Title}</td>
                <td>{val.Kelas}</td>
                <td>
                  <div className="ps-2">
                    <Button
                      className="px-4 bg-green border-transparet"
                      variant="success"
                    >
                      See
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  </AdminLayout>
);

export default Course;
