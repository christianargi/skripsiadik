import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
// import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import Image from "next/image";
import { auto } from "@popperjs/core";

const Login: NextPage = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const getRedirect = () => {
    const redirect = getCookie("redirect");
    if (redirect) {
      deleteCookie("redirect");
      return redirect.toString();
    }

    return "/";
  };

  const login = async (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setSubmitting(true);

    const res = await axios.post("api/mock/login");
    if (res.status === 200) {
      router.push(getRedirect());
    }
    setSubmitting(false);
  };

  return (
    <div className="bg-login min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      <Container>
        <Row className="justify-content-center align-items-center px-3">
          <Col lg={8}>
            <Row>
              <Col className="d-flex align-items-center justify-content-center me-5">
                <Image
                  src="/assets/img/loginLogo.png"
                  alt=""
                  width={120}
                  height={150}
                  style={{ width: "100%", height: "auto" }}
                />
              </Col>
              <Col md={7} className="bg-login-card rounded-2 p-5 text-white">
                <div className="">
                  <h1>Login</h1>
                  <form onSubmit={login}>
                    <InputGroup className="mb-3 mt-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} fixedWidth />
                      </InputGroup.Text>
                      <Form.Control
                        name="username"
                        required
                        disabled={submitting}
                        placeholder="Username"
                        aria-label="Username"
                        defaultValue="Username"
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} fixedWidth />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        name="password"
                        required
                        disabled={submitting}
                        placeholder="Password"
                        aria-label="Password"
                        defaultValue="Password"
                      />
                    </InputGroup>

                    <Row>
                      <Col xs={6}>
                        <Button
                          className="px-4 bg-green border-transparet"
                          variant="success"
                          type="submit"
                          disabled={submitting}
                        >
                          Login
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
