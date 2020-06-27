import React from 'react';
export interface PageHeaderProps {
  title: string;
  subTitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subTitle }) => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">
        {title}
        <small>{subTitle}</small>
      </h1>
    </header>
  );
};

export default PageHeader;
