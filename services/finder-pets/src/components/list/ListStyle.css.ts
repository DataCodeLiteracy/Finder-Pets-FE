import { createVar, style } from "@vanilla-extract/css";

export const highLightColor = createVar();

export const listBoxWrap = style({
  padding: "10px 0",
  margin: "0 10px",
  borderBottom: "1px solid #EBEBEB",
});

export const listBoxImage = style({
  borderRadius: "10px",
});

export const listInfoBoxWrap = style({
  width: "100%",
  marginLeft: "8px",
});

export const highLightTagStyle = style({
  width: "60px",
  padding: "4px 6px",
  marginRight: "4px",
  border: `1px solid ${highLightColor}`,
  borderRadius: "6px",
  transition: "backgroundColor 0.3s ease-in-out",
  selectors: {
    "&:hover": {
      backgroundColor: highLightColor,
    },
  },
});

export const highLightTagText = style({
  fontSize: "12px",
  color: highLightColor,
  transition: "color 0.3s ease-in-out",
  selectors: {
    [`${highLightTagStyle}:hover &`]: {
      color: "white",
    },
  },
});

export const infoDescriptionLabel = style({
  width: "20%",
  height: "16px",
  fontSize: "11px",
  color: "#918E8E",
});

export const infoDescriptionText = style({
  flexGrow: "1",
  fontSize: "11px",
  fontWeight: "500",
  textAlign: "right",
});

export const infoDescriptionBox = style({
  padding: "1px 0",
});

export const infoDescriptionWrap = style({
  padding: "0 8px",
  marginTop: "6px",
});
