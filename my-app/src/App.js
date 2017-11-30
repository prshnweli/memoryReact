import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Clicky Game!</Title>

    <div>
    <FriendCard
      image={friends[0].image}
    />
    <FriendCard
      image={friends[1].image}
    />
    <FriendCard
      image={friends[2].image}
    />
    </div>
    <div>
    <FriendCard
      image={friends[0].image}
    />
    <FriendCard
      image={friends[1].image}
    />
    <FriendCard
      image={friends[2].image}
    />
    </div>
    <div>
    <FriendCard
      image={friends[0].image}
    />
    <FriendCard
      image={friends[1].image}
    />
    <FriendCard
      image={friends[2].image}
    />
    </div>
  </Wrapper>
);

export default App;
