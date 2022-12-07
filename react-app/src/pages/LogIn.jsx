import { Alert, Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../utilities/AuthContext";
import { API } from "../utilities/constants";
import { setToken } from "../utilities/tokens";

const LogIn = () => {
  const navigate = useNavigate();

  const { setUser } = useAuthContext();
  const [error, setError] = useState("");
  const onFinish = async (values) => {
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data.error) {
        throw data.error;
      } else {
        // Saving the token in the SetToken function
        setToken(data.jwt);

        // Setting the user
        setUser(data.user);
        message.success(`Welcome back ${data.user.username}!`);
      }
    } catch (error) {
      console.error(error);
      setError(error.message, "Error!");
    } finally {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="log-in-container">
      <div>
        {error ? (
          <Alert
            className="alert_error"
            message={error}
            type="error"
            closable
            afterClose={() => setError("")}
          />
        ) : null}
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3>Log in your account</h3>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
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
              Login
            </Button>
          </Form.Item>
        </Form>
        <h5 className="form_help_text">
          New to Weather App? <Link to="/SignUp">Sign Up</Link>
        </h5>
      </div>
    </div>
  );
};

export default LogIn;
