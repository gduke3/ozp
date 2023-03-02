import React, { memo, useMemo } from "react";
import isEqual from "react-fast-compare";
import classNames from "classnames";

import { splitIntoWords, calculateCurrentIndex2D } from "@core/utils/common.utils";

export interface Props {
	text: string | string[];
	children: (props: { word: string; index: number; amount: number }) => React.ReactNode;
}

export const SplitIntoWords: React.FC<Props> = memo(
	({ text, children }) => {
		const wordsArray = useMemo(
			() =>
				(Array.isArray(text) ? text : [text]).map((row) => splitIntoWords(row, true)) as string[][],
			[text]
		);

		const wordsAmount = useMemo(() => wordsArray.flat(Infinity).length, [wordsArray]);

		return (
			<>
				{wordsArray.map((row, rowIndex) => (
					<p key={rowIndex} className={classNames("animated-row", "words")}>
						{row.map((word, index) => (
							<React.Fragment key={index}>
								{children({
									word,
									amount: wordsAmount,
									index: calculateCurrentIndex2D(wordsArray, rowIndex, index),
								})}
							</React.Fragment>
						))}
					</p>
				))}
			</>
		);
	},
	({ children: _, ...prevProps }, { children: __, ...nextProps }) => isEqual(prevProps, nextProps)
);
