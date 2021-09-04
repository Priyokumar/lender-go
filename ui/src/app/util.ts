export class Util {
  public static HTMLDateStringToDate(dateString: string): Date {
    if (!dateString) return null;
    const dateArr = dateString.split("-");
    const date = new Date(
      parseInt(dateArr[0]),
      parseInt(dateArr[1]) - 1,
      parseInt(dateArr[2])
    );
    return date;
  }

  public static DateToHTMLDateString(date: Date): string {
    if (!date) return null;
    const dateOfPaymentStr = `${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;

    return dateOfPaymentStr;
  }
}
