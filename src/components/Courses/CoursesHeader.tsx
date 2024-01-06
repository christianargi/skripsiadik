import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

interface IProps {
  bab: any;
}

export const CoursesHeader = (props: IProps) => {
  const { bab } = props;
  return (
    <>
      <div className="border-bottom border-dark justify-content-between row pb-3">
        <div className="col-1 fs-3">
          <FaArrowLeft />
        </div>
        <div className="col-2 fw-bold fs-3">Science</div>
      </div>
      <div className="border-bottom border-dark row px-3">
        <div className="col-1 p-2">
          <div className="teacher-profile">
            <Image
              fill
              src="/assets/img/avatars/8.jpg"
              alt="user@email.com"
              className="rounded-circle position-static"
            />
          </div>
        </div>
        <div className="col-11 py-2">
          <div className="row fs-5 py-1">Novaria Kemmel S.Pd.</div>
          <div className="row fs-6 py-1">Teacher | IPA - 1</div>
        </div>
      </div>
      <div className="border-bottom border-dark row py-3">
        <a className="col-2 font-black">Session</a>
        <a className="col-2 font-black">Reminder</a>
        <a className="col-2 font-black">Scoring</a>
      </div>
      <div className="border-bottom border-dark row py-2">
        {bab.map((val: any, idx: any) => {
          return (
            <div className="col pe-2">
              <Button
                className="px-4 bg-green border-transparet"
                variant="success"
              >
                {val.name}
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};
