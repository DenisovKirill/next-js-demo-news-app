const ArchiveLayout = ({ archive, latest }) => {
  return (
    <div>
      <h1>News archive</h1>
      <section id={'archive-filter'}>{archive}</section>
      <section id={'archive-latest'}>{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
