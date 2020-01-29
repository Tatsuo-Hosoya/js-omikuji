//strictモードでは、より的確なエラーチェックが行われる
'use strict';

{
	const btn = document.getElementById('btn');

	btn.addEventListener('click',()=>{
		//配列
		const results =['大吉','中吉','凶','末吉'];
		//整数値の取得
		const n = Math.floor(Math.random() * results.length);
		//定数resultsの配列の数値にMath.randomと取得した整数が一致したときにそれぞれの値が実行される
		btn.textContent = results[n];
		
		//textContentプロパティは要素内の文字列の取得更新を行う。
		//btn.textContent = n;

		//条件に応じて処理を分ける
		//switch (n) {
		//	case 0:
		//		btn.textContent = '大吉';
		//		break;
		//	case 1:
		//		btn.textContent = '中吉';
		//		break;
		//	case 2:
		//		btn.textContent =　'凶';
		//		break;
		//}
	})
}