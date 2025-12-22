import { Button, Card, Chip, RowList, Tab, Typography } from "@repo/ui";

function App() {
  return (
    <>
      <Button variant="solid" type="button">
        버튼
      </Button>
      <Tab
        type="fixed"
        items={[
          { value: "자바스크립트", label: "자바스크립트" },
          { value: "프로젝트", label: "프로젝트" },
          { value: "others", label: "others" },
        ]}
      />
      <Typography typography="body"> 타이포</Typography>

      <Card outlined>
        <Card.Header title="title" />
        <Card.Contents>
          <Typography typography="bodyS">보더가 있는 카드 입니다.</Typography>
        </Card.Contents>
      </Card>
      <ul>
        <RowList contents={<RowList.Texts title="2위" subTitle="롯데카드" />} />
        <RowList
          left={<Typography typography="body">CARD</Typography>}
          contents={<RowList.Texts title="2위" subTitle="롯데카드" />}
          right={<Chip label="LOTTE" />}
          withArrow={true}
        />
      </ul>
    </>
  );
}

export default App;
