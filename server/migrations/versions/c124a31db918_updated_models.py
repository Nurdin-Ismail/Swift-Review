"""updated models

Revision ID: c124a31db918
Revises: fa4281ae2f87
Create Date: 2023-10-03 14:17:43.526011

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c124a31db918'
down_revision = 'fa4281ae2f87'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('businessimgs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('businessimgurl', sa.String(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('businessimgs')
    # ### end Alembic commands ###
