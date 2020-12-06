import React, { Component } from "react";

const withFadeInWhenInView = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <WrappedComponent />
        </div>
      );
    }
  };
  // Viết code ở đây sao cho khi người dùng cuộn chuột trên trang,
  // và WrappedComponent đi từ ngoài vào trong cửa sổ trình duyệt
  // thì nó sẽ hiện ra từ từ với animation speed là 2s (hiệu ứng fadein)
};

export default withFadeInWhenInView;
