def binary_search(nums: list[int], target: int) -> int:
    lo = 0
    hi = len(nums)
    steps = 0

    while lo < hi:
        steps += 1

        mid = int((lo + hi) / 2)

        if nums[mid] == target:
            print("step:", steps)
            return mid
        elif nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid

    return -1


a = [1, 2, 3, 4, 5, 6, 7, 8, 10]
b = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

binary_search(a, 3)
binary_search(b, 3)
