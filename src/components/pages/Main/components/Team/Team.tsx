import { memo, useMemo } from "react";

import * as S from "./Team.styled";

export const Team: React.FC = memo(() => {
	return (
		<S.Team id='team'>
			<S.Title>Команда</S.Title>
			<div>
				<UserCard name='Максимов Захар' bio='Студент гр. МО-420' avatarColor='#3FD1FF' />
				<UserCard name='Осин Никита' bio='Студент гр. МО-419' avatarColor='#68FF89' direction='right' />
				<UserCard name='Валитов Салих' bio='Студент гр. МО-420' avatarColor='#CF68FF' />
				<UserCard
					name='Николаев Илья'
					bio='Студент гр. МО-419'
					avatarColor='#FF6868'
					direction='right'
				/>
			</div>
		</S.Team>
	);
});

const UserCard: React.FC<{
	name: string;
	bio: string;
	avatarColor: string;
	direction?: "right" | "left";
}> = memo(({ name, bio, avatarColor, direction = "left" }) => {
	const lettersOfName = useMemo(
		() =>
			name
				.split(" ")
				.slice(0, 2)
				.map((word) => word[0])
				.join(""),
		[name]
	);

	return (
		<S.UserRow style={{ flexDirection: direction === "right" ? "row-reverse" : undefined }}>
			<S.UserAvatar style={{ background: avatarColor }}>
				<S.UserAvatarLetters>{lettersOfName}</S.UserAvatarLetters>
				<S.UserBadge
					style={{
						textAlign: direction === "right" ? "right" : "left",
						right: direction === "right" ? "60%" : undefined,
						left: direction === "left" ? "60%" : undefined,
					}}>
					<S.UserName>{name}</S.UserName>
					<S.UserBIO>{bio}</S.UserBIO>
				</S.UserBadge>
			</S.UserAvatar>
			<S.UserRowLine />
		</S.UserRow>
	);
});
