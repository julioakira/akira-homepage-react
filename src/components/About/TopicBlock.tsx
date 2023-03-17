import React from "react";
import Topic from "./Topic";

export default function TopicBlock({ topicList }:{topicList: Topic[]}) {
  return (
    <div className="max-w-lg pt-5 pb-5">
      {topicList.map((t: Topic, i: number) => 
        <Topic key={`topic-${i}`} topic={t}/>
      )}
    </div>
  );
}
