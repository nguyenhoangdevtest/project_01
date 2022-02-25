import React from 'react';
import { Card } from 'antd';
import NxImage from 'next/image';

const { Meta } = Card;

const LoginPage = () => {
  return (
    <div className="text-xl font-bold">
      Login Page
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <NxImage
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            width={240}
            height={300}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      ,
    </div>
  );
};

export default LoginPage;
