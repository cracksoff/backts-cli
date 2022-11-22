/* @name getLastItem */
SELECT
	id,
	name
FROM items
WHERE
	status = :status!
ORDER BY id DESC
LIMIT 1;