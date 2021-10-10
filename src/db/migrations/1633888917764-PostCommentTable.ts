import {MigrationInterface, QueryRunner} from "typeorm";

export class PostCommentTable1633888917764 implements MigrationInterface {
    name = 'PostCommentTable1633888917764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feed_post_comment" ("id" SERIAL NOT NULL, "comment" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "postId" integer, CONSTRAINT "PK_2d842d06513b1e959b698cb7829" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "feed_post_comment" ADD CONSTRAINT "FK_395b850bb896801b25b5fad50f9" FOREIGN KEY ("postId") REFERENCES "feed_post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feed_post_comment" DROP CONSTRAINT "FK_395b850bb896801b25b5fad50f9"`);
        await queryRunner.query(`DROP TABLE "feed_post_comment"`);
    }

}
