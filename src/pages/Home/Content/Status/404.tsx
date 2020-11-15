import React, { FC } from "react";
import { Result, Button } from "antd";
import { intl } from "@/locales";
import { useHistory } from "react-router-dom";

interface propTypes {}

const Result404: FC<propTypes> = props => {
  const history = useHistory();

  const goHome = () => {
    history.push("/home/dashboard/analysis");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle={intl.get("common.error.pageNoExist")}
      extra={
        <Button type="primary" onClick={goHome}>
          {intl.get("common.base.goHome")}
        </Button>
      }
    />
  );
};

export default Result404;
