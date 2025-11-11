import { Box, IconButton, Typography, useTheme } from "@mui/material";
import useNewImage from "./use-new-image";
import { PhotoCamera } from "@mui/icons-material";
import { pxToRem } from "../../../utils/px-to-rem";

type NewImageProps = {
  onFileSelect?: (file: File) => void;
};

export default function NewImage({ onFileSelect }: NewImageProps) {
  const { fileInputRef, previewUrl, handleClick, handleFileChange } =
    useNewImage({ onFileSelect, maxSizeMB: 2 });

  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={pxToRem(32)}
      pt={pxToRem(16)}
    >
      <Box
        onClick={handleClick}
        sx={{
          width: {
            xs: pxToRem(130),
            sm: pxToRem(130),
            md: pxToRem(130),
            lg: pxToRem(230),
            xl: pxToRem(230),
          },
          height: {
            xs: pxToRem(130),
            sm: pxToRem(130),
            md: pxToRem(130),
            lg: pxToRem(230),
            xl: pxToRem(230),
          },
          // borderRadius: "50%",
          borderRadius: "10px",
          border: "1px dashed #333333",
          backgroundColor: theme.customBackground.default,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          "&:hover": { backgroundColor: "#eaeaea" },
        }}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <IconButton disableRipple sx={{ flexDirection: "column" }}>
            <PhotoCamera sx={{ color: "#333333", fontSize: "24px" }} />
            <Typography variant="body2" mt={1}>
              Upload photo
            </Typography>
          </IconButton>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            whiteSpace: "pre-line",
            textAlign: "center",
            lineHeight: 2,
          }}
        >
          {"Formatos\nJPG, JPEG e PNG"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: "pre-line", textAlign: "center", lineHeight: 2 }}
        >
          {"Tamanho Máximo\n2MB"}
        </Typography>
      </Box>
    </Box>
  );
}
