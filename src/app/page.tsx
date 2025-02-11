"use client";

import { SyntheticEvent, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch(`/api/users`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then(console.log)
      .catch(console.error);
  });

  async function onFormSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await fetch('/api/users', {
      method: 'POST',
      body: formData,
    }).then(console.log).catch(console.error);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form onSubmit={onFormSubmit}>
          <label>
            Name:
            <input required type="text" id="name" name="name" placeholder="John" />
          </label>
          <label>
            Email:
            <input required type="email" id="email" name="email" placeholder="hello@email.com" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}
