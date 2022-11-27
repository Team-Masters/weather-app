import { Alert, Button, Form, Input, message, Spin } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../utilities/AuthContext";
import { API } from "../utilities/constants";
import { setToken } from "../utilities/tokens";

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.error) {
        throw data.error;
      } else {
        // Keep the token in setToken function for the user session
        setToken(data.jwt);
        // set the user
        setUser(data.user);
        message.success(`Welcome to Weather App ${data.user.username}!`);
        navigate("/", { replace: true });
        console.log(data.user);
      }
    } catch (error) {
      console.error(error);
      setError(error.message, "An error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sign-up-container">
      <div>
        {error ? (
          <Alert
            className="alert_error"
            message={error}
            type="error"
            closableafterClose={() => setError("")}
          />
        ) : null}
        <h3 className="signup-text">Create an account</h3>
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, type: "string" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Email address" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login_submit_btn"
            >
              Submit {isLoading && <Spin size="small" />}
            </Button>
          </Form.Item>
        </Form>
        <h5 className="form_help_text">
          Already have an account? <Link to="/LogIn">Log in</Link>
        </h5>
      </div>
    </div>
  );
};

export default SignUp;
