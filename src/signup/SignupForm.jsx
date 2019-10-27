import React from "react";

export const SignupForm = ({ setPage }) => {
  const onSubmit = e => {
    e.preventDefault();
    setPage("profile");
  };

  return (
    <form onsubmit={onSubmit}>
      <div>
        <input
          type="email"
          name="email"
          label="email"
          placeholder="email@email.com"
        />
      </div>
      <div>
        <input
          type="text"
          name="firstname"
          label="firstname"
          placeholder="name"
        />
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          label="lastname"
          placeholder="surname"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          label="password"
          placeholder="password"
        />
      </div>
      <button>signup</button>
    </form>
  );
};
