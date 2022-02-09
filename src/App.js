import React, { useEffect, useState } from "react";

import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { AppContext } from "./context";
import { getTheme, setTheme } from "./helpers/theme";

const App = () => {
  const [message, addMessage] = useState(null);
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme)
  }, [theme])

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="container">
        <Header />
        <Chat newMessage={message} />
        <Footer onAddMessage={addMessage} />
      </div>
    </AppContext.Provider>
  );
};

export default App;