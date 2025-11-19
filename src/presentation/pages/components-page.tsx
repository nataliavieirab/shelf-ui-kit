import ComponentsWrapper from "../components/components-wrapper";
import BasicDatePickerExample from "../componentExamples/basic-datepicker-example";
import SimpleTextFieldExample from "../componentExamples/basic-textfield-example";
import ValidationTextfield from "../components/Textfields/ValidationTextfield/validation-textfield";
import SearchTextFieldExample from "../componentExamples/search-textfield-example";
import CustomContainedButton from "../components/CustomContainedButton/custom-contained-button";
import CustomOutlinedButton from "../components/CustomOutlinedButton/custom-outlined-button";
import ProductTable from "../componentExamples/products-table-example";
import CustomSwitch from "../components/Switches/custom-switch";
import SwitchWithLabelExample from "../components/Switches/switch-with-label-example";
import SelectExample from "../componentExamples/select-example";
import NewImage from "../components/NewImage/new-image";
import SelectWSearchExample from "../componentExamples/select-with-search-example";
import TabsContainerExample from "../componentExamples/tabs-container-example";
import PasswordTextfieldExample from "../componentExamples/password-textfield-example";
import { WidthBoxSizes } from "../components/types";
import { useTheme } from "@mui/material/styles";
import PageTitleContainerExample from "../componentExamples/page-title-container-example";

export default function ComponentsPreviewPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          padding: "20px",
          overflowY: "scroll",
          height: "97%",
        }}
      >
        <ComponentsWrapper
          items={[
            { label: "Select", component: <SelectExample /> },
            {
              label: "With Search",
              component: <SelectWSearchExample />,
            },
          ]}
          title="Dropdown"
        />

        <ComponentsWrapper
          items={[{ label: "Basic", component: <BasicDatePickerExample /> }]}
          title="Datepicker"
        />

        <ComponentsWrapper
          items={[
            { label: "Basic", component: <SimpleTextFieldExample /> },
            { label: "Validation", component: <ValidationTextfield /> },
            { label: "Search", component: <SearchTextFieldExample /> },
            { label: "Password", component: <PasswordTextfieldExample /> },
          ]}
          title="Textfield"
        />

        <ComponentsWrapper
          items={[
            {
              label: "Contained Add Button",
              component: (
                <CustomContainedButton
                  placeholder="Adicionar"
                  hasIcon={true}
                  type="add"
                  fieldWidth={WidthBoxSizes(useTheme()).small}
                />
              ),
            },
            {
              label: "Oulined Button",
              component: (
                <CustomOutlinedButton
                  placeholder="Importar"
                  hasIcon={true}
                  type="import"
                />
              ),
            },
          ]}
          title="Buttons"
        />

        <ComponentsWrapper
          items={[
            {
              label: "Basic",
              component: <ProductTable />,
            },
          ]}
          title="Table"
        />
        <ComponentsWrapper
          items={[
            { label: "Basic Switch", component: <CustomSwitch /> },
            { label: "With label", component: <SwitchWithLabelExample /> },
          ]}
          title="Switch"
        />
        <ComponentsWrapper
          items={[{ label: "New Image", component: <NewImage /> }]}
          title="New Image"
        />

        <ComponentsWrapper
          items={[
            { label: "Tabs Container", component: <TabsContainerExample /> },
          ]}
          title="Tabs Container"
        />

        <ComponentsWrapper
          items={[
            {
              label: "Page Title Container",
              component: <PageTitleContainerExample />,
            },
          ]}
          title="Tabs Container"
        />
      </div>
    </div>
  );
}
