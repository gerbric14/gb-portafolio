const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-gradient",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY} ${styles.paddingX}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

  inputContact:
    "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:border-cyan focus:outline-none focus:ring-0 peer",
  labelContact:
    "font-poppins peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan peer-focus:dark:text-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",

  boton:
    "py-1 px-2 flex justify-center my-1 border border-gray-400 text-white font-poppins font-medium text-[18px] outline-none rounded-[10px] hover:bg-[#12253c] hover:text-cyan hover:border hover:border-cyan transition-colors ease-in-out duration-200",
};

export default styles;
