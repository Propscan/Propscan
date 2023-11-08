import React from "react";
import Select from "react-select";

const variants = {
  OutlineBluegray900: "outline outline-[0.5px] outline-blue_gray_900",
};
const shapes = { CircleBorder12: "rounded-[12px]" };
const sizes = { sm: "" };

const SelectBox = (
    {
      children,
      placeholder = "Select",
      className = "",
      options = [],
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value = "",
      errors = [],
      indicator,
      shape = "",
      variant = "",
      size = "",
      ...restProps
    }
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);
    const color=restProps["color"] || "#0D2855";
    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data.value);
      }
    };

    return (
      <>
        <Select
          options={options}
          className={`${className} ${(shape && shapes[shape]) || ""} ${
            (size && sizes[size]) || ""
          } ${(variant && variants[variant]) || ""}`}
          placeholder={
            <div className={placeholderClassName} style={{color:color, textAlign:"center", fontSize: "min(max(8.5px, 3vw), 14px)"}}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti} 
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              border:placeholder === 'Relevance' ? "1px solid #0D2855" : "",
              borderRadius :placeholder === 'Relevance' ?"18px" : 0,
              padding: placeholder === 'Relevance' ? "6px": 0,
              width: placeholder === 'Relevance' ? "21vh" : ""
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              backgroundColor: state.isSelected && "#092c4c",
              fontSize: "min(max(8.5px, 3vw), 14px)",
              "&:hover": { backgroundColor: "#092c4c", color: "#ffffff" },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
              fontSize: "min(max(8.5px, 3vw), 14px)"
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
              fontSize: "min(max(8.5px, 3vw), 14px)"
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
              "svg": {
                fill: color
              }
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            placeholder: (base) => ({
              ...base,
              margin: 0,
              color: color
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  }

export { SelectBox };
