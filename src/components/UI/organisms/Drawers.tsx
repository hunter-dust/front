import React, { useState, useCallback } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
//서랍 컴포넌트 분리하려고 했으나 달력에 어떻게 합칠지 감이 안와서 이 파일은 현재 사용하지 않습니다.

const Drawers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <button onClick={toggleDrawer}>날짜인척 하는 버튼</button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="bottom" overlayOpacity={0}>
        <div>세부사항 컴포넌트 자리</div>
      </Drawer>
    </>
  );
};
export default Drawers;
