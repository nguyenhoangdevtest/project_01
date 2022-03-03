import React from 'react';
import { Card } from 'antd';
import NxImage from 'next/image';
import Button from 'libs/ui/src/lib/button';
import ButtonAtnd from 'libs/ui/src/lib/antd/ButtonAntd';
import useTranslation from 'next-translate/useTranslation';

const { Meta } = Card;

const LoginPage = () => {
  const { t } = useTranslation('login');
  return (
    <div className="text-xl font-bold">
      {t`Login Page`}
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
      <Button className="w-1/2 bg-red-400 col-span-2">{t("Test")}</Button>
      <ButtonAtnd
        className="mx-auto lg:mx-0 mt-2 lg:mt-0"
        type="primary"
        size="large"
        style={{ paddingLeft: 30, paddingRight: 30 }}
      >
        <span>Continue</span>
      </ButtonAtnd>
    </div>
  );
};

export default LoginPage;
