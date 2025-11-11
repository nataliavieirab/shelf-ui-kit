import { Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import { ErrorBoxProps } from "./error-box.types";
import { CardContentStyles, CardStyles } from "./error-box.styles";

export default function ErrorBox({
  errors,
  showBox,
  handleMouseEnter,
  handleMouseLeave,
  messageBoxOnBottom,
  customStyle = {},
}: ErrorBoxProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
      }}
    >
      <Card
        onMouseEnter={
          showBox && handleMouseEnter ? handleMouseEnter : (_) => {}
        }
        onMouseLeave={handleMouseLeave ? handleMouseLeave : (_) => {}}
        sx={CardStyles(messageBoxOnBottom, showBox, customStyle)}
      >
        <CardContent sx={CardContentStyles}>
          <List>
            {errors.map((error) => {
              return (
                <ListItem
                  key={error.id}
                  style={{
                    padding: "2px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      color: "red",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <ListItemText
                    style={{
                      whiteSpace: "nowrap",
                    }}
                    primary={error.message}
                  />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
