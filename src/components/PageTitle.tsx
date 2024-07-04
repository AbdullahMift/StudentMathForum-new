
type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center lg:px-8 pt-4" data-aos="fade-up" >
      <h1 className="font-semibold sm:text-2xl text-3xl">{title}</h1>
    </div>
  );
};

export default PageTitle;
