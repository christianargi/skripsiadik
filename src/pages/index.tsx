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

const Home: NextPage = () => (
  <AdminLayout>
    <div className="row">
      <div className="col-md-6">
        <div className="row ps-3 pb-2 fs-4">School Events</div>
        <div className="row ps-1 max-height-forum-dashboard">
          <Carousel controls={false} className="max-height-forum-dashboard">
            <Carousel.Item>
              <Image
                className="rounded-3 max-height-forum-dashboard overlay-dashboard"
                src="/assets/img/dummyImage.png"
                alt=""
                width={300}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="rounded-3 max-height-forum-dashboard overlay-dashboard"
                src="/assets/img/dummyImage.png"
                alt=""
                width={300}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="rounded-3 max-height-forum-dashboard overlay-dashboard"
                src="/assets/img/dummyImage.png"
                alt=""
                width={300}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="col-md-6 ">
        <div className="row ps-3 pb-2 fs-4">Forum</div>
        <div className="row px-3 ">
          <Card className="max-height-forum-dashboard overflow-scroll pe-4">
            <Card.Body>
              {forumList.map((value: any, idx: any) => {
                return (
                  <div className="border px-2 rounded-2 py-2 mb-2 flex justify-content-center row align-item-center selection-forum" key={idx}>
                    <div className="d-flex flex-column col-2 align-items-center justify-content-center">
                      <IoChatbubblesOutline className="fs-3" />
                    </div>
                    <div className="d-flex flex-column col-4 fs-5">
                      {value.forumName}
                    </div>
                  </div>
                );
              })}
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="col-md-12 mt-5 border-top pt-4">
        <div className="row ps-3 pb-2 fs-4">Billboard</div>
        <div className="row ps-1 max-height-forum-dashboard">
          <Carousel controls={false} className="max-height-forum-dashboard">
            <Carousel.Item>
              <Image
                className="rounded-3 max-height-forum-dashboard overlay-dashboard"
                src="/assets/img/billboardImage2.jpeg"
                alt=""
                width={300}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="rounded-3 max-height-forum-dashboard overlay-dashboard"
                src="/assets/img/billboardImage2.jpeg"
                alt=""
                width={300}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="rounded-3 max-height-forum-dashboard overlay-dashboard"
                src="/assets/img/billboardImage2.jpeg"
                alt=""
                width={300}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="col-md-12 mt-5 border-top pt-4">
        <div className="row ps-3 pb-2 fs-4">Displaying Vote</div>
        <div className="row ps-1 max-height-forum-dashboard">
          <Carousel controls={false} className="max-height-forum-dashboard">
            <Carousel.Item>
              <Image
                className="rounded-3 max-height-forum-dashboard overlay-dashboard"
                src="/assets/img/billboardImage.jpeg"
                alt=""
                width={500}
                height={800}
                style={{ width: "100%", height: "auto" }}
              />
              <Carousel.Caption className="text-white">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="rounded-3 max-height-forum-dashboard overlay-dashboard"
                src="/assets/img/billboardImage.jpeg"
                alt=""
                width={500}
                height={800}
                style={{ width: "100%", height: "auto" }}
              />
              <Carousel.Caption className="text-white">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="rounded-3 max-height-forum-dashboard overlay-dashboard"
                src="/assets/img/billboardImage.jpeg"
                alt=""
                width={500}
                height={800}
                style={{ width: "100%", height: "auto" }}
              />
              <Carousel.Caption className="text-white">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  </AdminLayout>
);

export default Home;
