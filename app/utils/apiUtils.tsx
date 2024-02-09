// 外部APIを叩くためのファイル

const API_KEY: string = "a48974a4a49f3e7b"; // APIキー

// レストランのデータを取得する関数
export const fetchRestaurantData = async (option: string) => {
  try {
    // ローカル環境ではCORSエラーが出るため，Nextjsの機能でもあるプロキシサーバーを経由してAPIを叩いたが，
    // どうしてもエラーが出るため，Chrome拡張機能の「Allow CORS」を用いて回避している．
    // 本番環境では問題なく動作すると思われる．
    const res = await fetch(
      `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}${option}&format=json`,
      { cache: "no-store" }
    );

    // レスポンスをjson形式に変換してレストランのデータのみを返す
    const data = await res.json();
    return data.results.shop;
  } catch (error) {
    // 取得できなかった場合はエラーを返す
    return error;
  }
};
